export default function StrapiErrors({error}: {readonly error: string}) {
  if (!error) return null
  return <div>{error}</div>
}