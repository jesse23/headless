import { DataProvider } from '@headless/types';
import styles from './SimpleList.module.scss';

export const SimpleList = ({
  dataprovider,
}: {
  dataprovider: DataProvider;
}) => {
  return (
    <>
      {dataprovider.totalFound === undefined ? ( <div>Loading...</div> ) : ( <div>Total: {dataprovider.totalFound}</div> ) }
      {dataprovider.loadedViewModelObjects.length > 0 && (
          <ul>
            {dataprovider.loadedViewModelObjects.map((vmo, index) => (
              <li key={index} className={styles.simpleListItem}>
                <div>{vmo.name}</div>
              </li>
            ))}
          </ul>
      )}
    </>
  );
};
