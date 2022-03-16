import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container }  = render(<Radio label="Radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: 'white'})
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label (black)', () => {
    render(<Radio label="Radio" labelColor="black" />)

    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: 'black'})

  })

  it('should render without label', () => {
    render(<Radio />)
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', () => {
    const onCheck = jest.fn()
    render(
      <Radio
        label='Radio'  
        labelFor='Radio'
        value="anyValue"
        onCheck={onCheck}
      />
    )

    expect(onCheck).not.toHaveBeenCalled()
    
    userEvent.click(screen.getByLabelText('Radio'))

    expect(onCheck).toHaveBeenCalledTimes(1)
  })

  it('should be accessible with tab', () => {
    render(<Radio label='Radio' labelFor='Radio' />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})