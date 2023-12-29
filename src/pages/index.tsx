import { ConfigProvider, Flex } from 'antd';
import { useStyles } from './styles';
import CounterfoilCanvas from './components/counterfoil-canvas';
import { PosterConfig } from '@/types';
import CounterfoilSidebar from './components/counterfoil-sidebar';
import { useState } from 'react';
import { useLocalStorageState, useMount } from 'ahooks';
import { loadFonts } from '@/utils';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';

export default function HomePage() {
  const styles = useStyles();
  const [isReady, setIsReady] = useState<boolean>(false);

  useMount(() => {
    loadFonts().then(() => {
      setIsReady(true);
    });
  });

  return (
    <ConfigProvider locale={locale}>
      <Flex className={styles.homePage}>
        <div className={styles.sidePanel}>
          <CounterfoilSidebar />
        </div>
        <div className={styles.content}>{isReady && <CounterfoilCanvas  />}</div>
      </Flex>
    </ConfigProvider>
  );
}
