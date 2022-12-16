import { HeaderContainer,BurguerMenu, ContentMenu } from "./styles";
import logo from '../../assets/logo.svg'
import { List } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            
            <Dialog.Root>
                
                <BurguerMenu>
                    <List size={32} />
                </BurguerMenu>
                <Dialog.Portal style={{transition:'ease 200ms'}}>
           
                <ContentMenu>
                    <header>
                            <Dialog.Close style={{position:'absolute',top:0,right:0}}>close</Dialog.Close>
                    </header>
                    <nav>
                        <ul>
                            <li><strong>00</strong> HOME</li>
                            <li><strong>01</strong> DESTINATION</li>
                            <li><strong>02</strong> CREW</li>
                            <li><strong>03</strong> TECHNOLOGY</li>
                        </ul>
                    </nav>
                   
                    
                </ContentMenu>
             

                </Dialog.Portal>
            </Dialog.Root>
        </HeaderContainer>
    )
}