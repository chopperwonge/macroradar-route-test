export default function Page({ params }: { params: any }) {
  return (
    <pre style={{ fontSize: 24 }}>
      {JSON.stringify(params, null, 2)}
    </pre>
  );
}
