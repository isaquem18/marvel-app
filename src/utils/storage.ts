interface StoreDataProps {
  name: string;
  value?: any;
  type?: 'local' | 'session';
}

export async function storeData({
  name,
  value,
  type = 'local',
}: StoreDataProps) {
  try {
    if (!value) {
      localStorage.removeItem(name);
      sessionStorage.removeItem(name);
      return;
    }

    if (type === 'local') {
      localStorage.setItem(name, JSON.stringify(value));
    } else {
      sessionStorage.setItem(name, JSON.stringify(value));
    }
  } catch (e) {
    // error
  }
}

interface GetDataProps {
  name: string;
  type?: 'local' | 'session';
}

export async function getData({ name, type = 'local' }: GetDataProps) {
  let jsonValue = null;
  let exportValue = null;

  try {
    if (type === 'local') {
      jsonValue = localStorage.getItem(name);
    } else if (type === 'session') {
      jsonValue = sessionStorage.getItem(name);
    }

    if (!jsonValue) {
      return null;
    }

    exportValue = JSON.parse(jsonValue);
  } catch (e) {
    // error
  }

  return exportValue;
}
