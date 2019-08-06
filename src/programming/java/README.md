# Java

Java is terrible.

## Jackson

Jackson is a java library for (de)serializing json.

If you create a `JsonDeserializer` subclass that is an inner class of another class (like below), you need to mark that inner class as `static`, or else you'll get a `$CLASS has no default (no arg) constructor` error.

```java
public class Foo {
    public static class FooDeserializer extends JsonDeserializer<Foo> {
        @Override
        public Foo deserialize(JsonParser parser, DeserializationContext ctx) throws IOException {
            return null;
        }
    }
}
```
