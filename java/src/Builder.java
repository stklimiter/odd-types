import java.util.Objects;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;


/**
 * First draft to make a functional generic builder class, not for production and not the way to go.
 */
public class Builder {

    public static <Result> Result of(Supplier<Result> constructor) {
        return constructor.get();
    }

    public static <First, Result> With<First, Result> of(Function<First, Result> constructor) {
        return first -> of(() -> constructor.apply(first));
    }

    public static <First, Second, Result> With<Second, With<First, Result>> of(BiFunction<First, Second, Result> constructor) {
        return second -> of(first -> constructor.apply(first, second));
    }

    public static <First, Second, Third, Result> With<Third, With<Second, With<First, Result>>> of(TriFunction<First, Second, Third, Result> constructor) {
        return third -> of((first, second) -> constructor.apply(first, second, third));
    }

    /**
     * The last one in the row, but lets be frank, if your constructor has more than 4 elements, you might need to rethink your model
     * @param constructor
     * @param <First>
     * @param <Second>
     * @param <Third>
     * @param <Fourth>
     * @param <Result>
     * @return
     */
    public static <First, Second, Third, Fourth, Result> With<Fourth, With<Third, With<Second, With<First, Result>>>> of(QuadFunction<First, Second, Third, Fourth, Result> constructor) {
        return fourth -> of((first, second, third) -> constructor.apply(first, second, third, fourth));
    }
}

@FunctionalInterface
interface QuadFunction<A, B, C, E, R> {
    R apply(A a, B b, C c, E e);
}
@FunctionalInterface
interface TriFunction<A, B, C, R> {
    R apply(A a, B b, C c);
}

@FunctionalInterface
interface With<One, Result> {
    Result with(One argument);
}
