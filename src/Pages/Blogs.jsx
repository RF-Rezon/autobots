import React from 'react';

const Blogs = () => {
    return (
        <div>
             <div>
        <div className="my-10">
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium  text-blue-600">
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </p>
            <p className="md:text-xl text-sm font-medium mt-2 text-zinc-800">
            An access token is a credential that is issued by an authentication server (such as OAuth or OpenID Connect) to represent the user's identity and permissions. It is typically a long string of characters and is used to access protected resources or perform actions on behalf of the user. The access token is usually included in the HTTP headers of API requests as a means of authorization. <br/>
            A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token. While the access token has a shorter lifespan, the refresh token is used to obtain a new access token when the current one expires. It helps maintain the user's session without requiring them to re-enter their credentials. <br />
            Access tokens and refresh tokens work together in an authentication flow. Like Authentication, Token Issuance, Access Token Usage, Token Expiration, Access Token Renewal, Refresh Token Usage and many more. <br />
            Regarding storage on the client-side, it is crucial to handle access tokens and refresh tokens securely to prevent unauthorized access or token leakage.
            </p>
          </div>
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium my-2 text-blue-600">
            Compare SQL and NoSQL databases?
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">To SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
          </div>
         
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium my-2  text-blue-600">
            What is express js? What is Nest JS? 
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
          </div>
          <div className="px-3 py-5">
            <p className="md:text-3xl text-2xl font-medium  my-2 text-blue-600">
            What is MongoDB aggregate and how does it work?
            </p>
            <p className="md:text-xl text-sm font-medium text-zinc-800">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Blogs;