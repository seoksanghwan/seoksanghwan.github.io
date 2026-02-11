import React, { useState, useEffect } from 'react';
import { App } from '@/components/App/App';

const get_version_of_IE = (): number => {
  const agent = navigator.userAgent.toLowerCase();
  if (navigator.appName === 'Microsoft Internet Explorer')
    return parseFloat(agent.split('msie ')[1]);
  if (agent.includes('trident')) return parseFloat(agent.split('rv:')[1]);
  if (agent.includes('edge/')) return parseFloat(agent.split('edge/')[1]);
  return -1;
};

const AppContainer: React.FC = () => {
  const [ieChecker, setIeChecker] = useState(false);
  const [noneStyle, setNoneStyle] = useState('');

  useEffect(() => {
    const checkVer = get_version_of_IE();
    setIeChecker(checkVer === -1);
  }, []);

  const closePopUpButtonEvent = () => setNoneStyle('none');

  return (
    <App
      ieChecker={ieChecker}
      noneStyle={noneStyle}
      closePopUpButtonEvent={closePopUpButtonEvent}
    />
  );
};

export default AppContainer;
