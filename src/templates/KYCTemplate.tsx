import React from 'react';

const
  KYCTemplate = async (props: {
    children: React.ReactNode;
  }) => {
    // const headersList = headers();
    // const pathname = (await headersList).get('x-pathname') || '';

    return (
      <main className="flex flex-col items-center bg-[#000C36]">
        <div className="w-full sm:max-w-[450px] sm:border-x border-dashed border-white">
          {props.children}
        </div>
      </main>
    );
  };

export default KYCTemplate;
