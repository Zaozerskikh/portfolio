import ButtonWithLink from "../ButtonWithLink";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import reduxStore from "../../../../redux/ReduxStore";
import {DefaultButtonColor} from "../DefaultButtonColor";
import {MemoryRouter} from "react-router-dom";

const renderLinkButton = (to: string, blank=false) => (
  <Provider store={reduxStore}>
    <MemoryRouter>
      <ButtonWithLink
        to={to}
        color={DefaultButtonColor.VIOLET}
        openAsBlank={blank}
      >
        Click me
      </ButtonWithLink>
    </MemoryRouter>
  </Provider>
)
describe('DefaultButton', () => {
  it('link button', () => {
    const { getByRole } = render(renderLinkButton('hello'));
    const linkButton = getByRole('link');

    expect(linkButton).toBeInTheDocument();
    expect(linkButton.tagName).toBe('A');
    expect(linkButton).toHaveAttribute('href', '/hello');
  });

  it('link button blank', () => {
    const { getByRole } = render(renderLinkButton('blank', true));
    const linkButton = getByRole('link');

    expect(linkButton).toBeInTheDocument();
    expect(linkButton.tagName).toBe('A');
    expect(linkButton).toHaveAttribute('href', '/blank');
    expect(linkButton).toHaveAttribute('target', '_blank');
  });
});
