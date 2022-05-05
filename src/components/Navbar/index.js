import React from 'react';

import { Products } from "../Content/Products";
import { Developers } from "../Content/Developers";
import { Company } from "../Content/Company";
import { DropdownProvider, DropdownOption, DropdownRoot } from "../Dropdown"
import { Container, DropdownStyles } from './styles';

function Navbar() {
    return (
        <DropdownProvider>


            <DropdownStyles>
                <Container>
                    <ul>
                        <li>
                            <DropdownOption
                                name="Produtos"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Desenvolvedores"
                                content={Developers}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Empresa"
                                content={Company}
                            />
                        </li>
                    </ul>

                </Container>

                <DropdownRoot />
            </DropdownStyles>
        </DropdownProvider>
    );
}

export default Navbar;