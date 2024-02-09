import AsideBar from '../../components/AsideBar';
import React from 'react';
import { HEADER_OFFSET } from '../../lib/constants';

const template = ({ children }) => {
  return (
    <main>
      <div className={`sticky top-[${HEADER_OFFSET}px]`}>
        <section className="relative flex p-4 mx-2 lg:p-4 lg:my-4 lg:mx-8">
          <AsideBar />
          <section className="flex p-2 lg:basis-4/5 flex-col lg:px-10 lg:py-8 ">
            {children}
          </section>
        </section>
      </div>
    </main>
  );
};

export default template;