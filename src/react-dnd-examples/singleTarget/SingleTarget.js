import { memo } from 'react';
import Card from '../../components/Card';
import Dustbin from '../../components/Dustbin';

const SingleTarget = memo(() => {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div>
        <Card name="Glass" />
        <Card name="Banana" />
        <Card name="Paper" />
      </div>
    </div>
  );
});

export default SingleTarget;
