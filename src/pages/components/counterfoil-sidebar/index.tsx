import { useStyles } from './styles';
import { Card, Tabs } from 'antd';
import ExportBtn from './export-btn';
import NormalForm from './normal-form';

export type CounterfoilSidebarProps = {};

const CounterfoilSidebar: React.FC<CounterfoilSidebarProps> = () => {
  const styles = useStyles();

  return (
    <>
      <Card bodyStyle={{ padding: 12 }} className={styles.counterfoilSidebar}>
        <Tabs
          items={[
            {
              label: '常规',
              key: '常规',
              children: <NormalForm />,
            },
          ]}
        />
      </Card>

      <div className={styles.exportPanel}>
        <div style={{ margin: 8 }}>
          <ExportBtn />
        </div>
      </div>
    </>
  );
};

export default CounterfoilSidebar;
