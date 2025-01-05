export default async function page({
  params,
}: {
  params: Promise<{ type: string; page: string[] }>;
}) {
  const { page, type } = await params;

  return (
    <div>
      <div>
        <h1>Type:</h1>
        <p>typeof: {typeof type}</p>
        <p>value: {type}</p>
      </div>
      <div>
        <h1>Page:</h1>
        <p>typeof: {typeof page}</p>
        <p>value: {JSON.stringify(page)}</p>
      </div>
    </div>
  );
}
