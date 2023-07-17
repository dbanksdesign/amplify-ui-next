import { Card } from "@aws-amplify/ui-react"

export const DeployCard = ({ children, variation = '' }: React.PropsWithChildren<{ variation?: string }>) => {
  return (
    <Card className={`deploy-card deploy-card--${variation}`}>
      {children}
    </Card>
  )
}