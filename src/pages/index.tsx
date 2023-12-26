import { Flex } from 'antd';
import { useStyles } from './styles';
import CounterfoilCanvas from './components/counterfoil-canvas';

export default function HomePage() {
  const styles = useStyles();

  return (
    <Flex className={styles.homePage}>
      <div className={styles.sidePanel}></div>
      <div className={styles.content}>
        <CounterfoilCanvas />
      </div>
    </Flex>
  );
}
