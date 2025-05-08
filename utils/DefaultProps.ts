export default interface DefaultProps<T> {
  className?: string;
  id?: string;
  title?: string;
  children?: any;
  topic?: T;
  onClick?: (parm: any) => any;
}
