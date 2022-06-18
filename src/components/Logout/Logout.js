import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSliceActions } from '../../store/authSlice';
import { apiData } from '../../utils/apiData';

export function Logout() {
  const dispatch = useDispatch();
  const jwt = useSelector((state) => state.authSlice.jwt);
  const logOutUser = async () => {
    try {
      const data = await fetch(`${apiData}/user/logout`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });
      if (!data.ok) {
        return;
      }
      dispatch(authSliceActions.setJwt(''));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    logOutUser().catch((err) => console.log(err));
  }, []);

  return (
    <div />
  );
}
