public class SumCalculator {
    public static int sumTo(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("n must be non-negative");
        }

        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        int n = 5;
        System.out.println("Sum from 1 to " + n + " = " + sumTo(n));
    }
}
