interface PropsWithChildren {
    children: any;
}

const aux = (props: PropsWithChildren) => props.children;

export default aux;