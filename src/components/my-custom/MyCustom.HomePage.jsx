import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';

export function MyCustomHomePage() {
    const components = useBosComponents();


    return <>
        <VmComponent src={components.myProfilePage} props={{accountId: 'idknwhoru.near'}}/>
    </>;
}