# Derivatives

The derivative of a function is how quickly (or not) the output of a function changes as its input changes. Or, in another way, the derivative specifies the rate of change of a function.

For example, if you have a function, such as \\(f(x) = 2x\\), which models the the position of an object at a given time, \\(x\\), you can use the derivative to calculate the velocity of the object. Similarly, you can the use the derivative of a velocity function to calculate the acceleration. The derivative of acceleration is called the jerk.

The rest of this article will deal with 2-dimensional functions. Higher-dimensional functions will be another article.

Rigorously, the derivative of a function at a given point as the value of the slope of a line tangent to that function at that point. Using that definition, you can use [limits]({{#path_for limits}}) to calculate the slope of a line tangent to the function \\(f(x)\\) at any given point:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} f(x) = \lim_{n \to 0} \frac{f(x + n) - f(x - n)}{2}
\\]

And we can use this for any point \\(x\\) we wish to calculate the slope of the line at that point. However, this is incredibly tedious to actually do so, and so it's not used for anything beyond basic introduction to derivatives.

Instead of limits, we use a number of different rules for deriving the derivative.

## Power Rule

[3Blue1Brown video covering the power rule](https://www.youtube.com/watch?v=S0_qX4VJhMQ&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=3&t=414s).

The easiest rule to examine is the power rule. This is the rule used for calculating the derivative of a function \\(f(x) = x^n\\). This rule is:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} x^n = n*x^{n - 1}
\\]

This even extends to functions like \\(f(x) = sqrt(x)\\), which can also be represented as \\(f(x) = x^{\frac{1}{2}}\\). Additionally, this works for inverse functions, such as \\(f(x) = \frac{1}{x}\\), which also can be represented as \\(f(x) = x^{-1}\\).

## Sine and Cosine

[3Blue1Brown video covering Sine and Cosine](https://www.youtube.com/watch?v=S0_qX4VJhMQ&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=3&t=756s).

Next up is Sine and Cosine. The derivative of the Sine function is the Cosine function, and the derivative of the Cosine function is the negative Sine function. So, these function create a loop of derivatives.

\\[
\frac{\mathrm{d}}{\mathrm{d}x} \sin{(x)} = \cos{(x)}
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} \cos{(x)} = -\sin{(x)}
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} -\sin{(x)} = -\cos{(x)}
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} -\cos{(x)} = \sin{(x)}
\\]

## Exponentials and Logarithms

[3Blue1Brown video on derivative of exponentials](https://www.youtube.com/watch?v=m2MIpDrF7Es&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr&index=5)

Exponentials, or \\(f(x) = n^x\\), use the following rule:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} n^x = n^x * \ln{(x)}
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} e^x = e^x
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} \ln{(x)} = \frac{1}{x}
\\\\
\frac{\mathrm{d}}{\mathrm{d}x} \log_n{(x)} = \frac{1}{x * \ln{(n)}}
\\]

The constant \\(e\\), known as [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)), is a transcendental number. It deals a lot with exponential rates of change, is defined as the base of an exponential function with a derivative equal to itself.

The natural log, \\(\ln\{(x)}\\), is the logarithm with base \\(e\\). Which is also part of why the derivative of logarithms with other bases include the natural logarithm in some way.

## Derivatives of Composite Functions

[3Blue1Brown video covering derivatives of composite functions](https://www.youtube.com/watch?v=YG15m2VwSjA&).

Composite functions are functions with more than 1 operation. For example: \\(f(x) = g(x) + h(x)\\), or \\(f(x) = g(x) * h(x)\\), or \\(f(x) = g(h(x))\\), or any combination thereof.

### Added functions

The derivative of a function of form \\(f(x) = g(x) + h(x)\\) is equal to the sum of the derivatives of its component parts. Or put another way:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {g(x) + h(x)} = \frac{\mathrm{d}}{\mathrm{d}x} g(x) + \frac{\mathrm{d}}{\mathrm{d}x} h(x)
\\]

Which might be used like this:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {3x^3 + \sin{(x)}} = 9x^2 + \cos{(x)}
\\]

### Multiplied functions (Product Rule)

The derivative of a function of form \\(f(x) = g(x) * h(x)\\) follows the product rule, and it is defined as:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {g(x) * h(x)} = \frac{\mathrm{d}}{\mathrm{d}x} g(x) * h(x) + \frac{\mathrm{d}}{\mathrm{d}x} h(x) * g(x)
\\]

Or, for the function \\(f(x) = 3x^3 * \sin{(x)}\\):

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {3x^3 * \sin{(x)}} = 9x^2 * \sin{(x)} + 3x^3 * \cos{(x)}
\\]

### Composed functions

Finally, for composed functions, or functions of form \\(f(x) = g(h(x))\\), these follow the chain rule. Which is defined as:

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {g(h(x))} = \frac{\mathrm{d}}{\mathrm{d}x} g(h(x)) * \frac{\mathrm{d}}{\mathrm{d}x} h(x)
\\]

Or, for the function \\(f(x) = sin(3x^3)\\):

\\[
\frac{\mathrm{d}}{\mathrm{d}x} {\sin{(3x^3)}} = 9x^2 * \cos{(3x^3)}
\\]
