import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class PreviewServer {
    public static void main(String[] args) throws Exception {
        Path root = Path.of(".").toRealPath();
        HttpServer server = HttpServer.create(new InetSocketAddress("127.0.0.1", 4173), 0);
        server.createContext("/", exchange -> serve(exchange, root));
        server.start();
        System.out.println("Portfolio preview: http://localhost:4173/");
    }

    private static void serve(HttpExchange exchange, Path root) throws IOException {
        String path = URLDecoder.decode(exchange.getRequestURI().getRawPath(), StandardCharsets.UTF_8);
        if (path.equals("/")) path = "/index.html";
        Path file = root.resolve(path.substring(1)).normalize();
        if (!file.startsWith(root) || !Files.isRegularFile(file)) {
            byte[] notFound = "Not found".getBytes(StandardCharsets.UTF_8);
            exchange.sendResponseHeaders(404, notFound.length);
            exchange.getResponseBody().write(notFound);
            exchange.close();
            return;
        }
        String name = file.getFileName().toString().toLowerCase();
        String type = name.endsWith(".html") ? "text/html; charset=utf-8"
                : name.endsWith(".css") ? "text/css; charset=utf-8"
                : name.endsWith(".js") ? "text/javascript; charset=utf-8"
                : name.endsWith(".jpg") || name.endsWith(".jpeg") ? "image/jpeg"
                : name.endsWith(".png") ? "image/png"
                : name.endsWith(".java") ? "text/plain; charset=utf-8"
                : "application/octet-stream";
        exchange.getResponseHeaders().set("Content-Type", type);
        byte[] content = Files.readAllBytes(file);
        exchange.sendResponseHeaders(200, content.length);
        exchange.getResponseBody().write(content);
        exchange.close();
    }
}
