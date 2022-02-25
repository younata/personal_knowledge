# Limits

Limits are about examining the value of functions at any given input. They are fundamental to calculus because they allow you to rigorously define both the integral and the derivative. They're also useful on their own for being able to calculate what a value **should** be, despite not having the information of what the value **actually** is.

For simple functions (e.g. \\( f(x) = x + 1 \\)), figuring out the value of the function at any given input isn't difficult. Simply evaluate the function. However, consider functions that are undefined at a some values. For example, consider \\( f(x) = x + \frac{x - 1}{x - 1} \\), which looks like the following:

<canvas id="limits_1_over_x_squared" width="750" height="500px" class="responsive">
</canvas>

<script type="text/javascript">
var canvas = document.getElementById("limits_1_over_x_squared");

function redraw() {
    Draw(
        canvas,
        function(x) { return (x + (x - 1) / (x - 1)); },
        10, -10,
        10, -10,
        [1]
    );
}

window.onload = (event) => {
    const resizeObserver = new ResizeObserver(entries => {
        redraw();
    });

    resizeObserver.observe(canvas);
    redraw();
};
</script>

Notice the hole at \\( x = 1 \\). This correctly indicates that \\( f(1) \\) is undefined - there's a divide by zero error, meaning that we don't know what the value actually is. This is where limits become useful. Limits are essentially asking "if we could evaluate this function for the desired value, what would it be?". More rigorously, the limit of a function approaching a given value is what does the output of the function approach as the input approaches the given value. Limits are represented notationally as:

\\[
\lim_{x \to 1} f(x)
\\]

Or, in words, "The limit of \\(f(x)\\), as x approaches 1".

We can calculate this numerically by evaluating \\(f(x)\\) at different values very close to 1, but not exactly 1, and examining what it approaches.

You can also determine this algebraically. For example, we can simplify the example function as follows by simplifying the \\( \frac{x - 1}{x - 1} \\).

\\[
f(x) = x + \frac{x - 1}{x - 1}
f(x) = x + 1
\\]

And then we can easily evaluate this simplified \\( f(x) \\) at \\( x = 1 \\), to verify that \\( \lim_{x \to 1} x + \frac{x - 1}{x - 1} = 2 \\).
