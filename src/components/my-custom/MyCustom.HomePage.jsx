import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';

export function MyCustomPage() {
    const components = useBosComponents();


    return <>
        <VmComponent src={components.myProfilePage}/>
    </>;
}