import AsideBar from '../../components/AsideBar';
import React from 'react';
import { HEADER_OFFSET } from '../../lib/constants';

const template = ({ children }) => {
    return (
      <main>
        <div className={`sticky top-[${HEADER_OFFSET}px]`}>
          <section className="relative flex p-4 my-4 mx-8">
            <AsideBar />
            <section className="flex basis-4/5 flex-col px-10 py-8 ">
            {children}
            </section>
          </section>
        </div>
      </main>
    );
};

export default template;