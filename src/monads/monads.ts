type mapping<S, Lift> = Lift extends ((value: infer V) => infer R) ? { map: (fn: (value: S) => V) => R } : never

type monad<K, L = <I>(value: I) => monad<I>> = mapping<K, L>
const liftMonad = <P>(value: P): monad<P> => ({map: <I>(fn: (value: P) => I) => liftMonad(fn(value))})

type maybe<K> = monad<NonNullable<K>, <I>(value: I) => maybe<I>>

const isNonNull = <K>(value: K): value is NonNullable<K> => value !== null && value !== undefined

const liftMaybe = <P>(value: P): maybe<P> => ({map: <S>(fn: (value: NonNullable<P>) => S) => isNonNull(value) ? liftMaybe(fn(value)) : this as maybe<P>})