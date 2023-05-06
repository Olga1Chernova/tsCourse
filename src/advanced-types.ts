function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise()
    .then((data) => {
        console.log(data);
});


type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: Pick<AllType, "name"|"color">, bottom: Pick<AllType, "position"|"weight">): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


function merge<S extends object, U extends object>(objA:S, objB:U) {
  return Object.assign(objA, objB);
}


class Component<T> {
    constructor(public props: T) { }
}

interface Props {
  title: string;
}


class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}
