const roles = {
  one: 'one',
  two: 'two',
} as const;

export default async function page({
  params,
}: {
  params: Promise<{ type: string; page: string[] }>;
}) {
  const { page: pageParams, type } = await params;
  if (typeof type)
    return (
      <div>
        <div>
          <h1>Type:</h1>
          <p>typeof: {typeof type}</p>
          <p>value: {type}</p>
        </div>
        <div>
          <h1>Page:</h1>
          <p>typeof: {typeof pageParams}</p>
          <p>value: {JSON.stringify(pageParams)}</p>
        </div>
      </div>
    );
}

export function generateStaticParams() {
  return [
    ...['all', ...Object.keys(roles)].map((type) => ({
      type,
    })),
    ...['all', ...Object.keys(roles)].map((type) => ({
      type,
      page: ['1'],
    })),
  ];
}
