import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import t from './common/localization';
import EditPage from './EditPage';

const DevicePage = () => {
  const [item, setItem] = useState();

  const [name, setName] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  const getItem = () => {
    const updatedItem = item;
    updatedItem.name = name;
    updatedItem.uniqueId = uniqueId;
    return updatedItem;
  };

  return (
    <EditPage endpoint="devices" setItem={setItem} getItem={getItem}>
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
            defaultValue={item.uniqueId}
            onChange={(event) => setUniqueId(event.target.value)}
            label={t('deviceIdentifier')}
            variant="filled" />
        </>
      }
    </EditPage>
  );
}

export default DevicePage;
