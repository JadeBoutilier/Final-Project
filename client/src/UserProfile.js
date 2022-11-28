import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const UserProfile = () => {
    const id = useParams().id;

  const [user, setUser] = useState();

  //fetching designer info
  useEffect(() => {
    fetch(`/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error(data.message);
        } else {
          setUser(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  console.log(user);
    return ( 
    <Wrapper>
        <>{user.userFirstName}</>
    </Wrapper> 
    );
}
 const Wrapper= styled.div`
 `
export default UserProfile;