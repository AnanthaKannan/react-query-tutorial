import React, { useEffect, useState } from 'react';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsConfig from '../aws-exports';

Amplify.configure(awsConfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <div>
          <h1>Welcome {AuthState.SignedIn?.user} </h1>
          <AmplifySignOut buttonText="Bye sing out" />
          <div><pre>{JSON.stringify(user, null, 2) }</pre></div>
      </div>
    ) : (
        <div>
      <AmplifyAuthenticator >
           <AmplifySignUp
            headerText="Create a new account - Honey Bee Engineers"
            slot="sign-up"
            formFields={[
                { type: "username" },
                { type: "password" },
                { type: "email" }
            ]}
            />
        </AmplifyAuthenticator>
        </div>
  );
}

export default AuthStateApp;