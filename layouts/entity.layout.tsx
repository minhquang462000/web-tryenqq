import { ILayout } from '@/components/headers/interfaces';
import * as React from 'react';


export function EntityLayout({ children }: Readonly<ILayout>) {
  return (
    <section>
      {children}
    </section>
  );
}
