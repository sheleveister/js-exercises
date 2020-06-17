interface IProps {n: number; n2: number};

const pipe = (...fns: Function[]) => ({n, n2}: IProps) => fns.reduce((acc, f) => f(acc), {n, n2});
// const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) => fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1);
// const identity = <T>(arg: T) => arg;
// const pipe = <T>(...fns: ((arg: T) => T)[]) => fns((acc,curr) => (x: T) => curr(acc(x)) , identity);

const trace = (label: string) => (value: IProps) => {
  // console.log(`${ label }: ${ value }`);
  console.log(label, value);
  return value;
};

const traceAfterG = (value: IProps) => {
  const label = 'after g';
  console.log('value 1', value);
  // console.log(`${ label }: ${ value }`);
  return value;
};

const g = ({n, n2}: IProps): IProps => ({n: n + n2 + 1, n2});
const f = ({n, n2}: IProps): IProps => ({n: n + n2 * 2, n2});

const h = pipe(
  g,
  traceAfterG,
  f,
  trace('after f 2'),
);

const res = h({n: 20, n2: 20}).n;
console.log(res);
