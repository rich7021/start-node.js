# How do module really work?

This chapter shows when we call a function in other module, how it really work step by step.

We can learned that each module invoked is wrapped in a IIFE and node.js execute the wrapped function, using it to make the module is protected in the current running scope (can access in the current scope), and get the results. That is, actually, **we only write the body of the wrapped function.**

* Remember:  
  `require` function returns `module.exports`

The code in this chapter is just a expale to show how module invoked in the main procedure.
