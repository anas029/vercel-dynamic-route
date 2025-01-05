import Container from '@/components/ui/container';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <Container>
      <h1 className=" py-4 text-center">قائمة الشخصيات</h1>
      <div className="mb-4 flex flex-wrap justify-center gap-6">
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
        <Skeleton className=" my-2 aspect-[3/4] w-[30%]" />
      </div>
    </Container>
  );
}
