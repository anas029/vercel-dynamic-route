import Container from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="px-4 md:px-10 mx-auto">
      <Suspense fallback="قائمة الصور"></Suspense>
      <Suspense
        fallback={
          <>
            <div className="flex justify-between my-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="fuzzy-mode">البحث المرن</label>
              </div>
              <h3>بحث الشخصيات</h3>
            </div>
            <Skeleton className="w-full h-12 my-2" />
          </>
        }
      >
        Search
      </Suspense>
      <Suspense fallback={<p>Loading</p>}>
        <section>{children}</section>
      </Suspense>
    </Container>
  );
}
