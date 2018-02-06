# Introduction

This repository is used for recording my note when I start to learn node.js.

The note content extracts from a udemy course called "Learn and Understand NodeJS". I am not sure if I make this note will be illeagle or not. Therefore, if any things about
infringement of copyright, please tell me and I will take it off or close this repository. Thanks.


# AWS Lambda

## Getting started

### Blocks of a Lambda-based application

- Lambda function
- Event source - Trigger of function
- Downstream resources - resources of function access once it be called.
- Log streams
- AWS SAM - A model to define serverless applications.

### Tools

- Lambda console
- AWS CLI
- SAM Local - A command-line interface to develop and test and analyze the application.

### Before begin

- [Set up an AWS Account](#set-up-an-aws-account)
- Set up the AWS CLI (Optional)
- SAM Local (Optional)

[](#set-up-an-aws-account)

### Set up an AWS account

1. sign up an AWS account

2. Create an IAM user

Using IAM user login into the service console. That makes your account more safety due to you will never public your root account and credential. Users or service always access AWS service with IAM user which contains certain authority instead of root account. Even if the IAM user is hacked, the consequences are more controllable.

# Lambda functions

## Life cycle

- authoring code
- deploying code
- monitoring and troubleshooting

## Authoring

Regardless of the language, there is a pattern to writing Lambda function code. Like:

- How to write handler method?
- How to pass event to the handler?
- How to generate logs in CloudWatch?
- How to interact with Lambda runtime?
- How to handle exception?

## Programming Model

### Common pattern to follow

- Handler - program entry. Lambda passes any event data to this handler as the first parameter.
- The context object and how it interact with Lambda at runtime - Lambda passes a context object to the handler function as the second parameter.
- Logging - Lambda function can contain logging statements.
- Exceptions - The function needs to communicate the result of the function execution to AWS Lambda.

**NOTE**

Lambda function must be written in a stateless style, and have no affinity with the underlying compute infrastructure. Stateless enables AWS Lambda launch a s many copies of a function as needed to scale.

### JAVA

#### Handler

Lambda supports 2 approaches for creating a handler:

- Loading the handler method directly.
- Implementing standard interfaces provided as part of aws-lambda-java-core library.

The general syntax for the handler:

```java
outputType handler_name(inputType input, Context context) {
  ...
}
```

##### Output

- Synchronously - Using RequestResponse invocation.
- Asynchronously - Using event invocation, the output type should be `void`.

##### Overload Resolution

If the code contains multiple methods with same name as the handler name:

1. Select the one with the largest number of parameters.
2. Select the one with Context as the last parameter.

#### <font color="red">Create a Lambda Function Authored in JAVA</font>
