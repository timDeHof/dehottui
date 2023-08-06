export default function classNamesUtil(...classes) {
  return classes.filter(Boolean).join(" ");
}
