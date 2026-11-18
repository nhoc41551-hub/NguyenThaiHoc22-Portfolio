public class Book {
    private final String title;
    private final double price;

    public Book(String title, double price) {
        if (title == null || title.trim().isEmpty()) {
            throw new IllegalArgumentException("title must not be blank");
        }
        if (price < 0) {
            throw new IllegalArgumentException("price must not be negative");
        }
        this.title = title;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public double getPrice() {
        return price;
    }

    public static void main(String[] args) {
        Book book = new Book("Clean Code", 12.5);
        System.out.println(book.getTitle() + " — $" + book.getPrice());
    }
}
