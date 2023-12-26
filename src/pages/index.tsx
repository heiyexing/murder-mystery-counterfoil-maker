import { Flex } from 'antd';
import { useStyles } from './styles';
import CounterfoilCanvas from './components/counterfoil-canvas';
import { PosterConfig } from '@/types';
import CounterfoilSidebar from './components/counterfoil-sidebar';
import { useState } from 'react';

const posterConfig: PosterConfig = {
  width: 428,
  height: 926,
  posterImg: 'https://mdn.alipayobjects.com/huamei_baaa7a/afts/img/A*h6p8S76U58IAAAAAAAAAAAAADqSCAQ/original',
  title: '观白觉喜',
  role: '傻子',
  username: '洛琰',
  time: '2023-12-22',
  roleImg: 'https://pic.imgdb.cn/item/658afb19c458853aefba3146.jpg',
};

export default function HomePage() {
  const styles = useStyles();
  const [config, setConfig] = useState<PosterConfig>(posterConfig);

  return (
    <Flex className={styles.homePage}>
      <div className={styles.sidePanel}>
        <CounterfoilSidebar config={config} setConfig={setConfig} />
      </div>
      <div className={styles.content}>
        <CounterfoilCanvas config={posterConfig} />
      </div>
    </Flex>
  );
}
