/* eslint-disable no-console */

/* eslint-disable ts/no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useBoxTree } from '@/app/http/queries/useBox';
import { boxRequest } from '@/app/http/requests/box';
import PreviousNavigation from '@/components/PreviousNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useGetCookie from '@/hooks/useGetCookie';
import ChevronDown2Icon from '@/libs/shared/icons/ChevronDown2';
import Connection2Icon from '@/libs/shared/icons/Connection2';
import MinuteIcon from '@/libs/shared/icons/Minute';
import PlusIcon from '@/libs/shared/icons/Plus';
import SearchIcon from '@/libs/shared/icons/Search';
import Search2Icon from '@/libs/shared/icons/Search2';
import WalletIcon from '@/libs/shared/icons/Wallet';
import { formatAddress, handleClipboardCopy, isClient } from '@/libs/utils';
import { useQueryClient } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type User = {
  _id: string;
  address: string;
};

type TreeNode = {
  id: string;
  level: number;
  originalAddress: string;
  address: string;
  type: 'folder' | 'share' | 'more' | 'previous';
  children?: TreeNode[];
  isExpanded?: boolean;
  // Thêm metadata phân trang cho mỗi node
  paginationData?: {
    currentPage: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
};

type TreeData = {
  lv1: TreeNode[];
};

// Thêm type để quản lý state phân trang của từng node
type NodePaginationState = {
  [nodeId: string]: {
    currentPage: number;
    pages: { [pageNumber: number]: User[] };
    totalPages: number;
  };
};

export default function Tree() {
  const hasFetched = useRef(false);
  const [address, setAddress] = useState<string>('');
  const [currentFetchingAddress, setCurrentFetchingAddress] = useState<string>('');
  const [treeDataV2, setTreeDataV2] = useState<TreeData>({ lv1: [] });
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);
  // State để lưu trữ dữ liệu phân trang của từng node
  const [nodePaginationState, setNodePaginationState] = useState<NodePaginationState>({});
  if (!hasFetched) {
    console.log(nodePaginationState);
  };
  const queryClient = useQueryClient();
  const { handleGetCookie } = useGetCookie();

  const isFetching = queryClient.isFetching({ queryKey: ['boxTree', currentFetchingAddress] }) > 0 || false;

  const isCurrentFetching = (address: string) => {
    return currentFetchingAddress === address;
  };

  useEffect(() => {
    (async () => {
      const authData = await handleGetCookie('authData');
      if (authData) {
        setAddress((authData as { address: string })?.address);
      }
    })();
  }, []);

  const {
    data,
    isSuccess,
    isLoading: isInitialLoading,
    isFetchingNextPage,
    isError
  } = useBoxTree(address);

  const urlSharing = isClient ? `${window.location.origin}/login` : '';

  // Hàm phân trang thủ công cho level 1
  const fetchLevel1Page = useCallback(async (page: number) => {
    try {
      setCurrentFetchingAddress(address);

      const response = await boxRequest.boxTree({
        address,
        page
      });

      if (response instanceof Error) {
        throw response;
      }

      const users = response?.result.users;
      const pagination = response?.result.pagination;
      if (!users || !pagination) {
        return;
      }
      // Cập nhật state phân trang cho root
      setNodePaginationState(prev => ({
        ...prev,
        root: {
          currentPage: page,
          pages: {
            ...(prev.root?.pages || {}),
            [page]: users
          },
          totalPages: pagination.pageTotal
        }
      }));

      // Rebuild tree với data mới
      buildLevel1Tree(users, pagination);
    } finally {
      setCurrentFetchingAddress('');
    }
  }, [address]);

  // Xây dựng lại tree level 1
  const buildLevel1Tree = useCallback((users: User[], pagination: any) => {
    const treeDataV2Initial: TreeNode[] = [];
    const currentPage = pagination.page;
    const totalPages = pagination.pageTotal;
    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < totalPages;

    // Nút Previous
    if (hasPrevious) {
      treeDataV2Initial.push({
        id: 'root-previous',
        level: 1,
        originalAddress: address,
        address: `Trở lại`,
        type: 'previous',
        paginationData: {
          currentPage,
          totalPages,
          hasNext,
          hasPrevious
        }
      });
    }

    // Thêm users
    for (let i = 0; i < Math.min(9, users.length); i++) {
      treeDataV2Initial.push({
        id: users[i]?._id || `root-${i}`,
        level: 1,
        originalAddress: users[i]?.address || '',
        address: formatAddress(users[i]?.address || '', 2),
        type: 'folder',
        children: [],
        isExpanded: false
      });
    }

    // Nút More
    if (hasNext) {
      treeDataV2Initial.push({
        id: 'root-more',
        level: 1,
        originalAddress: address,
        address: `Xem thêm`,
        type: 'more',
        paginationData: {
          currentPage,
          totalPages,
          hasNext,
          hasPrevious
        }
      });
    }

    // Padding với Share buttons
    const currentLength = treeDataV2Initial.length;
    const isPreviousButton = treeDataV2Initial[0]?.type === 'previous';
    for (let i = isPreviousButton ? currentLength - 1 : currentLength; i < 9; i++) {
      treeDataV2Initial.push({
        id: `root-share-${i}`,
        level: 1,
        originalAddress: address,
        address: 'Chia sẻ',
        type: 'share',
      });
    }

    setTreeDataV2({ lv1: treeDataV2Initial });
  }, [address]);

  // Fetch children với phân trang
  const fetchChildrenPage = async (
    parentAddress: string,
    parentId: string,
    parentLevel: number,
    page: number
  ) => {
    try {
      setCurrentFetchingAddress(parentAddress);

      const response = await boxRequest.boxTree({
        address: parentAddress,
        page
      });

      if (response instanceof Error) {
        throw response;
      }

      const users = response?.result.users;
      const pagination = response?.result.pagination;

      if (!users || !pagination) {
        return;
      }
      // Cập nhật state phân trang cho node này
      const nodeKey = `${parentAddress}-${parentLevel}`;
      setNodePaginationState(prev => ({
        ...prev,
        [nodeKey]: {
          currentPage: page,
          pages: {
            ...(prev[nodeKey]?.pages || {}),
            [page]: users
          },
          totalPages: pagination.pageTotal
        }
      }));

      // Build children nodes
      const children = buildChildrenNodes(
        users,
        pagination,
        parentId,
        parentLevel,
        parentAddress
      );

      // Update tree
      updateNodeChildren(parentAddress, children);
    } finally {
      setCurrentFetchingAddress('');
    }
  };

  // Build children nodes với phân trang
  const buildChildrenNodes = (
    users: User[],
    pagination: any,
    parentId: string,
    parentLevel: number,
    parentAddress: string
  ): TreeNode[] => {
    const children: TreeNode[] = [];
    const currentPage = pagination.page;
    const totalPages = pagination.pageTotal;
    const hasPrevious = currentPage > 1;
    const hasNext = currentPage < totalPages;

    // Previous button
    if (hasPrevious) {
      children.push({
        id: `${parentId}-previous-${currentPage}`,
        level: parentLevel + 1,
        originalAddress: parentAddress,
        address: `Trở lại`,
        type: 'previous',
        paginationData: {
          currentPage,
          totalPages,
          hasNext,
          hasPrevious
        }
      });
    }

    // User nodes
    for (let i = 0; i < Math.min(9, users.length); i++) {
      children.push({
        id: users[i]?._id || `${parentId}-child-${i}`,
        level: parentLevel + 1,
        originalAddress: users[i]?.address || '',
        address: formatAddress(users[i]?.address || '', 2),
        type: 'folder',
        children: [],
        isExpanded: false
      });
    }

    // More button
    if (hasNext) {
      children.push({
        id: `${parentId}-more-${currentPage}`,
        level: parentLevel + 1,
        originalAddress: parentAddress,
        address: `Xem thêm`,
        type: 'more',
        paginationData: {
          currentPage,
          totalPages,
          hasNext,
          hasPrevious
        }
      });
    }

    // Padding với share buttons
    const currentLength = children.length;
    const maxItems = hasPrevious || hasNext ? 10 : 9;
    for (let i = currentLength; i < maxItems; i++) {
      children.push({
        id: `${parentId}-share-${i}`,
        level: parentLevel + 1,
        originalAddress: parentAddress,
        address: 'Chia sẻ',
        type: 'share',
      });
    }

    return children;
  };

  const handleSearchAddress = () => {
    if (!isSearching) {
      setIsSearching(true);
    } else {
      if (!searchRef.current || !searchRef.current.value) {
        return;
      }
      hasFetched.current = false;
      setAddress(searchRef.current.value);
      setIsSearching(false);
      searchRef.current?.blur();
    }
  };

  // Update node với children mới
  const updateNodeChildren = (targetAddress: string, newChildren: TreeNode[]) => {
    setTreeDataV2(prevTreeData => ({
      lv1: updateNodeRecursively(prevTreeData.lv1, targetAddress, newChildren, true)
    }));
  };

  // Update node recursively
  const updateNodeRecursively = (
    nodes: TreeNode[],
    targetAddress: string,
    newChildren: TreeNode[],
    forceExpand = false
  ): TreeNode[] => {
    return nodes.map((node) => {
      if (node.originalAddress === targetAddress && node.type === 'folder') {
        return {
          ...node,
          isExpanded: forceExpand || !node.isExpanded,
          children: forceExpand ? newChildren : (node.isExpanded ? [] : newChildren),
        };
      }

      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: updateNodeRecursively(node.children, targetAddress, newChildren, forceExpand),
        };
      }

      return node;
    });
  };

  // Toggle expand/collapse node
  const toggleNode = async (node: TreeNode) => {
    if (node.isExpanded) {
      // Collapse
      setTreeDataV2(prevTreeData => ({
        lv1: updateNodeRecursively(prevTreeData.lv1, node.originalAddress, [])
      }));
    } else {
      // Expand - fetch page 1
      findParentNode(treeDataV2.lv1, node.id);
      await fetchChildrenPage(
        node.originalAddress,
        node.id,
        node.level,
        1
      );
    }
  };

  // Find parent node
  const findParentNode = (nodes: TreeNode[], childId: string): TreeNode | null => {
    for (const node of nodes) {
      if (node.children?.some(child => child.id === childId)) {
        return node;
      }
      if (node.children) {
        const found = findParentNode(node.children, childId);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Handle button actions
  const handleNodeAction = async (node: TreeNode) => {
    switch (node.type) {
      case 'share':
        handleClipboardCopy(`${urlSharing}?invitedBy=${node.originalAddress}`);
        break;

      case 'more':
        if (node.level === 1) {
          // Level 1 - fetch next page
          const currentPage = node.paginationData?.currentPage || 1;
          await fetchLevel1Page(currentPage + 1);
        } else {
          // Child levels
          const parentNode = findParentOfNode(treeDataV2.lv1, node);
          if (parentNode) {
            const currentPage = node.paginationData?.currentPage || 1;
            await fetchChildrenPage(
              parentNode.originalAddress,
              parentNode.id,
              parentNode.level,
              currentPage + 1
            );
          }
        }
        break;

      case 'previous':
        if (node.level === 1) {
          // Level 1 - fetch previous page
          const currentPage = node.paginationData?.currentPage || 2;
          await fetchLevel1Page(currentPage - 1);
        } else {
          // Child levels
          const parentNode = findParentOfNode(treeDataV2.lv1, node);
          if (parentNode) {
            const currentPage = node.paginationData?.currentPage || 2;
            await fetchChildrenPage(
              parentNode.originalAddress,
              parentNode.id,
              parentNode.level,
              currentPage - 1
            );
          }
        }
        break;

      case 'folder':
        await toggleNode(node);
        break;
    }
  };

  // Find parent of a node recursively
  const findParentOfNode = (nodes: TreeNode[], targetNode: TreeNode): TreeNode | null => {
    for (const node of nodes) {
      if (node.children?.some(child => child.id === targetNode.id)) {
        return node;
      }
      if (node.children) {
        const found = findParentOfNode(node.children, targetNode);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  // Initial load
  useEffect(() => {
    if (isSuccess && data && !hasFetched.current) {
      const latestPage = data.pages[data.pages.length - 1];
      const users = latestPage?.result.users;
      const pagination = latestPage?.result.pagination;
      if (!users || !pagination) {
        return;
      }
      buildLevel1Tree(users, pagination);
      hasFetched.current = true;
    }
  }, [isSuccess, data, buildLevel1Tree]);

  // Render functions
  const renderIcon = (type: string) => {
    switch (type) {
      case 'share':
        return <Connection2Icon className="translate-y-1" />;
      case 'more':
        return <ChevronDown2Icon className="translate-y-1" />;
      case 'previous':
        return <ChevronDown2Icon className="-translate-y-1 rotate-180" />;
      default:
        return <WalletIcon className="size-12 translate-y-1 text-white" />;
    }
  };

  const getButtonColor = (type: string) => {
    switch (type) {
      case 'share':
      case 'more':
      case 'previous':
        return 'tree-button-2';
      default:
        return 'tree-button';
    }
  };

  const renderTreeNode = (node: TreeNode) => {
    const marginLeft = (node.level - 1) * 50;
    const isLoading = isCurrentFetching(node.originalAddress)
      || (node.type === 'more' && isFetchingNextPage);

    return (
      <div key={node.id} className="relative">
        <div className="flex items-center gap-3 mb-3" style={{ marginLeft: `${marginLeft}px` }}>
          <span className="text-white text-sm font-medium min-w-[1px] w-[15px]">
            Lv.
            {node.level}
          </span>

          <div className="w-5 h-px bg-white translate-x-1" />

          <Button
            className={`${getButtonColor(node.type)} rounded-lg py-2 flex items-center min-w-[100px] w-[105px]`}
            disabled={isLoading}
            onClick={() => handleNodeAction(node)}
          >
            {renderIcon(node.type)}
            <span className="text-white text-[0.625rem] font-[700] -translate-x-4">{node.address}</span>
          </Button>

          {node.level < 9 && node.type === 'folder' && (
            <Button
              onClick={() => toggleNode(node)}
              className="tree-button-3 size-10"
              disabled={isFetching}
            >
              {isCurrentFetching(node.originalAddress) ? (
                <Loader2 className="animate-spin size-4" />
              ) : (
                !node.isExpanded ? <PlusIcon className="translate-y-1" /> : <MinuteIcon className="translate-y-1" />
              )}
            </Button>
          )}
        </div>

        {node.isExpanded && node.children && node.children.length > 0 && (
          <div className="relative">
            <div
              className="absolute w-px bg-white"
              style={{
                left: `${marginLeft + 40}px`,
                top: '8px',
                height: `${node.children.length * 48 + 8}px`,
              }}
            />
            {node.children.map(child =>
              renderTreeNode(child)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="relative z-10 overflow-x-auto p-8 ">
        <div className="flex flex-col items-center mb-8">
          <PreviousNavigation isReload />
          {!isSearching && (
            <>
              <h2 className="text-shadow-custom text-[1rem] font-[274]">Hành trình kết nối</h2>
              <h1 className="text-shadow-custom text-[1.25rem] font-[700]">Sơ đồ hệ thống</h1>
            </>
          )}
          <div className={`absolute right-3 ${isSearching ? 'w-4/5' : 'w-0'} transition-all duration-300 -translate-y-1`}>
            <div className="relative">
              <button
                type="button"
                onClick={() => handleSearchAddress()}
                className="absolute right-0 z-20"
              >
                {isSearching ? <Search2Icon /> : <SearchIcon />}
              </button>
              <Input
                className={`absolute top-0 border ${isSearching ? 'h-11 block ' : 'h-0 hidden'} text-white rounded-full pe-10`}
                onKeyDown={e => e.key === 'Enter' && handleSearchAddress()}
                ref={searchRef}
                placeholder="Nhập địa chỉ ví"
                style={{
                  background: 'linear-gradient(180deg, rgba(104, 218, 242, 0.50) 0%, rgba(28, 91, 185, 0.50) 95.1%)'
                }}
              />
            </div>
          </div>
        </div>
        {isError && (
          <div className="text-white text-center h-[calc(100vh-170px)] flex flex-col items-center justify-center gap-4">
            <p className="text-lg font-bold">Không tìm thấy dữ liệu</p>
            <p className="text-sm">Vui lòng thử lại sau.</p>
            <div>
              <Button className="button-base" onClick={() => window.location.reload()}>
                Quay lại
              </Button>
            </div>
          </div>
        )}
        {!isSearching && !isError && (
          <div className="h-[calc(100vh-170px)] overflow-y-scroll">
            {isInitialLoading ? (
              <Loader2 className="animate-spin text-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            ) : (
              treeDataV2.lv1.map(node => renderTreeNode(node))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
