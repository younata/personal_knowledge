# 2019-07-17 Observability in Control Theory

She practiced a talk on control theory in front of me. These are my notes. The talk content might be wrong - she's still learning about this.

E.G. Drone on top of a car, measuring the car.

It has a method to track the target (car). The way it does it is to measure the state of the target.

`x(t+1) = A * x(t)`

`A` is a transition matrix - it maps the target from the current state to the next (next state = current state * transition matrix)

Drone can measure the target's "process" - it can estimate the next state of the target because it has the transition matrix encoded in it.

Let's say drone also has some radar/camera sensors (other sensors).

Now, `y(t) = C * x(t)` - `y` is the drone's measurement of `x(t)`. C maps the current state to what the drone is observing.

This format is how we'd model dynamical system. Usually there'd be other terms for noise (B - process noise, D - measurement noise).

Given this system, the system is observable if given `y(0), y(1), ..., y(l)` if we can backtrack to a state `x(0)`

How to get from the measurements to the original state (get from `y(0), y(1), ...` to `x(0)). So, we know from `x(1) = A * x(0)`, and we know that `x(2) = A * x(1)` = `A^2 * x(0)`. Therefore, `x(l) = A^l * x(0)`

Similarly, `y(0) = C * x(0)` and `y(1) = C * x(1) = C * A * x(0)`, and so forth: `y(l) = C*A^l*x(0)`. This can then be rewritten as a system of linear equations, like so:

| y      | observability matrix |
|--------|--------|
| `y(0)` | `C`    |
| `y(1)` | `CA`   |
| `y(2)` | `CA^2` |
| ...    | ...    |
| `y(l)` | `CA^l` |

Can then be solved for `x(0)` if we have `A` and `C`. So, we could write this out if we have matrices `A` and `C`, but it's a long matrix, so it'd be difficult to compute.

How do we know that this is observible if it's computationally hard to get to a unique `x(0)`

So, this can be written as:

`y\_bar = O * x(0)` (O = observability matrix). If the `rank(O) == n` (rank = number of columns, n = number of states that target can be in), then the system is observable.

Doesn't tell you how observable it is, or how much information you need in order to get to x(0) - it could be observable, but it might be infeasible to observe.

## Measuring Observability

So, measuring observability:

Observability gramiam - different kind of matrix that is used to tell how observable a system is.

`for all t from 0 to l`, the normal of `y(t)` squared = energy of `y` = the observability gramiam. The higher, the more observable.
`= sum from 0 to l of transposed(C * A ^ t * x(0)) * (C * A ^ t * x(0))` = `G`.

If we take determinant of `G`, and is high, then we have high energy in `y`, and it's highly observable.

want to maximize the minimum eigenvalues of `G`, in order to have high observability.

These are all ways to say how observable a system is.

## Usefulness

Why do this?

You can use this information to calculate how well a kalman filter works by calculating the observability gramiam.

You can determine how well you designed your system.
