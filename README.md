# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common error in Node.js where an unhandled exception can crash the server.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

In the original code, if there is an error during request processing (e.g., accessing a non-existent property), the server will crash without warning. This is because the exception is not caught and handled gracefully.

## Solution

The solution involves using the `server.on('error', ...)` event listener.  This listener captures any errors that occur within the server and prevents the server from crashing. The error is logged to the console, providing valuable debugging information.