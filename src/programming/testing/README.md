# Testing

Theory behind testing. For practical information, look in each language's pages.

If you're not practicing [TDD](https://en.wikipedia.org/wiki/Test-driven_development), your code is wrong. If your code happens to work without tests, then you're practicing voodoo programming[^voodoo_programming], and that's worse than not having tests at all.

What is TDD? At it's simplest, it's test-first. That is, write down what you expect the code to do, then write the code to get the test to pass.

## Why test

Why even test? Surely just manually running the code is enough to see that it works, right?

No. Tests provide automated and repeatable use cases for the code. Without them, to get the same quality of code, you need to write down exactly how to verify the code, and then follow that procedure each time the code (or one of it's dependencies) changes. Compounding that with the other parts of the code, this eventually presents a mountain of work to do just to even verify small changes.

With automated, repeatable tests, the only difference is that the verification procedure is written in code. This allows your computer to follow those steps, which it can do in orders of magnitude less time than you can, with much higher attention to detail than you can continuously give it. Additionally, it allows you to more tightly control all the inputs and outputs, so you know precisely what caused a bit of code to go wrong.

Additionally, anyone else who works with you now has a simple script they can run to verify that your changes work, instead of having to look up and follow your documentation to try to figure out what you did to test it. This can even be generalized into an external environment that automatically runs the test script to determine whether or not your changes are good - something which is called [continuous integration]({{#path_for Continuous Integration}})

## Why TDD

So, testing has it's values, sure. Why test first? Why is that so much better than writing tests after the implementation code is written?

1. It forces you to write down, in code, what you expect the implementation to do.
   Writing this down will also force you to write down branches of the code as it moves through.
2. This bypasses the whole "yeah, we ran out of time to write tests" issue - always write tests, even when something like a time crunch makes it painful.
3. It's much more scientific.  
   TDD essentially applies the scientific method to programming.
    1. You take the observation (what the code should do)
    2. You take the hypothesis (what the code is now)
    3. You write down tests to verify the hypothesis against the observation
    4. You continuously run those tests against, modifying the hypothesis until it matches the observation.
4. It's more relaxing.  
   Once you're in the mindset of "the code is done when the tests pass", this becomes more like a game to get the tests to pass.

## Tools

For iOS, I'm a big fan of [Quick](https://github.com/quick/Quick/) and [Nimble](https://github.com/quick/Nimble/). As of May 2022, I even took over maintainership of the projects.

This generalizes to me being a big fan of [rspec-based](https://rspec.info) testing frameworks. I find that this better allows me to express the branching behavior of tests, as well as makes it more obvious the different effects a given action (method or function) can have.

## Videos

[Bryan Lile's TATFT lightning talk](https://www.youtube.com/watch?v=LfmAzLAKKoc) expresses a lot of the same philosophy that I do.

[^voodoo_programming]: Programming without knowing/understanding what the code you're writing actually does.
