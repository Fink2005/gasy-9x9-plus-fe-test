import React from 'react';

const
  RootTemplate = async (props: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="flex flex-col items-center bg-[#000C36]">
        <div className="w-full relative sm:max-w-[450px] sm:border-x border-dashed border-white">
          {props.children}
        </div>
      </main>
    );
  };

export default RootTemplate;
