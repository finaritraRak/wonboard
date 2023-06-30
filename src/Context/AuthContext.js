import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// on créé notre contexte
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [candidat, setCandidat] = useState(false);
  const [entreprise, setEntreprise] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [uid,setUid] = useState()

 

  const fetchUser = async () => {
    let adminUrl = `http://localhost:5000/api/admin/loggedInAdmin`;
    let entrepriseUrl = `http://localhost:5000/api/user/loggedInEntreprise`;
    let candidatUrl = `http://localhost:5000/api/user/loggedInCandidat`;

    const checkAdmin = await axios.get(adminUrl);
    const checkEntreprise = await axios.get(entrepriseUrl);
    const checkCandidat = await axios.get(candidatUrl);
    

    axios
      .all([checkAdmin, checkEntreprise, checkCandidat])
      .then(
        axios.spread((...responses) => {
          const reponseAdmin = responses[0];
          const reponseEntreprise = responses[1];
          const reponseCandidat = responses[2];
          if (reponseAdmin.data !== false) {
            setUid(reponseAdmin.data.id);
            setAdmin(true);
          } else if (reponseEntreprise.data !== false) {
            setUid(reponseEntreprise.data.id);
            setEntreprise(true);
          } else if (reponseCandidat.data !== false) {
            setUid(reponseCandidat.data.id);
            setCandidat(true);
          }
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ uid, entreprise, candidat, admin, fetchUser}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

