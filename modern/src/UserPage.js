import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import t from './common/localization';
import EditPage from './EditPage';

const UserPage = () => {
  const [item, setItem] = useState();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getItem = () => {
    const updatedItem = item;
    updatedItem.name = name;
    updatedItem.email = email;
    updatedItem.password = password;
    return updatedItem;
  };

  return (
    <EditPage endpoint="users" setItem={setItem} getItem={getItem}>
      {item &&
        <>
          <TextField
            margin="normal"
            fullWidth
            defaultValue={item.name}
            onChange={(event) => setName(event.target.value)}
            label={t('sharedName')}
            variant="filled" />
          <TextField
            margin="normal"
            fullWidth
            defaultValue={item.email}
            onChange={(event) => setEmail(event.target.value)}
            label={t('userEmail')}
            variant="filled" />
          <TextField
            margin="normal"
            fullWidth
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            label={t('userPassword')}
            variant="filled" />
        </>
      }
    </EditPage>
  );
}

export default UserPage;
