import React, {useEffect, useState} from 'react';

import api from '../../../services/api';

import Background from '../../../components/Background';

import {Container, ProvidersList, Provider, Avatar, Name} from './styles';

const SelectProvider = ({navigation}) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');

      setProviders(response.data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({item: provider}) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', {provider})}>
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://avatars.dicebear.com/4.5/api/avataaars/${
                        provider.name
                      }.svg?w=50&h=50`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;
