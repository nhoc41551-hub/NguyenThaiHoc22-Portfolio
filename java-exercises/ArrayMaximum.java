public class ArrayMaximum {
    public static int maxOf(int[] numbers) {
        if (numbers == null || numbers.length == 0) {
            throw new IllegalArgumentException("numbers must not be empty");
        }

        int max = numbers[0];
        for (int number : numbers) {
            if (number > max) {
                max = number;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] numbers = {4, 9, 2, 7};
        System.out.println("Maximum = " + maxOf(numbers));
    }
}
